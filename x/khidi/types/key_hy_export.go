package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HyExportKeyPrefix is the prefix to retrieve all HyExport
	HyExportKeyPrefix = "HyExport/value/"
)

// HyExportKey returns the store key to retrieve a HyExport from the index fields
func HyExportKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
