// https://docs.buf.build/generate/usage#limit-to-specific-files
// buf generate --path src/protos/file.proto

// todo?: use canonical json
// todo?: use .fromBinary(bytes, { readUnknownFields: false })

import { base58, base64, base64url, utf8 } from '@scure/base'
import brotli from 'brotli'
// import { utf8ToBytes as toBytes } from 'ethereum-cryptography/utils'
import lz from 'lz-string'
import { brotliCompressSync, gzipSync } from 'node:zlib'

import {
  CommunityChatPreview,
  CommunityPreview,
  UserPreview,
} from '../protos/link-preview_pb'

import type { PlainMessage } from '@bufbuild/protobuf'

export function encodeUrlData(
  type: 'community' | 'chat' | 'user',
  data: PlainMessage<CommunityPreview | CommunityChatPreview | UserPreview>,
  options: {
    serialization: 'csv' | 'protobuf'
    compression: 'gzip' | 'brotli' | 'browser:brotli' | 'lz' | 'noop'
    encoding: 'encodeURIComponent' | 'base58' | 'base64' | 'base64url'
  } = {
    serialization: 'protobuf',
    compression: 'brotli',
    encoding: 'base64url',
  }
): string {
  let serialized: Uint8Array
  switch (options.serialization) {
    case 'csv':
      // note!: does not handle nested data
      serialized = utf8.decode(Object.values(data).join(','))
      // serialized = Object.values(data).join(',')

      break

    case 'protobuf':
      switch (type) {
        case 'community':
          serialized = new CommunityPreview(data).toBinary()

          break

        case 'chat':
          serialized = new CommunityChatPreview(data).toBinary()

          break
        case 'user':
          serialized = new UserPreview(data).toBinary()

          break
      }

      break
  }

  let compressed: Uint8Array
  switch (options.compression) {
    case 'gzip':
      compressed = gzipSync(serialized)

      break

    case 'brotli':
      compressed = brotliCompressSync(serialized)

      break

    case 'browser:brotli':
      compressed = brotli.compress(serialized)

      break

    case 'lz': {
      compressed = lz.compressToUint8Array(utf8.encode(serialized))
      // const ce = base64url.encode(compressed)
      // const c2 = Buffer.from(lz.compressToUTF16(utf8.encode(serialized))) // more bytes than utf8
      // const c2e = base64url.encode(c2) // more chars than ce
      // const c3 = lz.compressToEncodedURIComponent(utf8.encode(serialized)) // less chars than ce, but only by a few

      break
    }

    case 'noop':
      compressed = serialized

      break
  }

  // note: would require ifCompressed header (e.g. br)
  // if (compressed.length > serialized.length) {
  //   compressed = serialized
  // }

  let encoded: string
  switch (options.encoding) {
    case 'encodeURIComponent':
      if (options.serialization !== 'csv' || options.compression !== 'noop') {
        throw 'Invalid options'
      }

      encoded = encodeURIComponent(utf8.encode(compressed))

      break

    case 'base58':
      encoded = base58.encode(compressed)

      break

    case 'base64':
      encoded = base64.encode(compressed)

      break

    case 'base64url':
      // todo?: use base64url.encode(compressed, { padding: false }); slice/remove traling padding
      encoded = base64url.encode(compressed)

      break
  }

  return encoded
}
