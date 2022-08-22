package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HyImportKeyPrefix is the prefix to retrieve all HyImport
	HyImportKeyPrefix = "HyImport/value/"
)

// HyImportKey returns the store key to retrieve a HyImport from the index fields
func HyImportKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
