package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HyMarketsizeKeyPrefix is the prefix to retrieve all HyMarketsize
	HyMarketsizeKeyPrefix = "HyMarketsize/value/"
)

// HyMarketsizeKey returns the store key to retrieve a HyMarketsize from the index fields
func HyMarketsizeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
