package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HyPartnerKeyPrefix is the prefix to retrieve all HyPartner
	HyPartnerKeyPrefix = "HyPartner/value/"
)

// HyPartnerKey returns the store key to retrieve a HyPartner from the index fields
func HyPartnerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
