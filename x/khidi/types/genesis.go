package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		HyMarketsizeList: []HyMarketsize{},
		HyPartnerList:    []HyPartner{},
		HyImportList:     []HyImport{},
		HyExportList:     []HyExport{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in hyMarketsize
	hyMarketsizeIndexMap := make(map[string]struct{})

	for _, elem := range gs.HyMarketsizeList {
		index := string(HyMarketsizeKey(elem.Index))
		if _, ok := hyMarketsizeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for hyMarketsize")
		}
		hyMarketsizeIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in hyPartner
	hyPartnerIndexMap := make(map[string]struct{})

	for _, elem := range gs.HyPartnerList {
		index := string(HyPartnerKey(elem.Index))
		if _, ok := hyPartnerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for hyPartner")
		}
		hyPartnerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in hyImport
	hyImportIndexMap := make(map[string]struct{})

	for _, elem := range gs.HyImportList {
		index := string(HyImportKey(elem.Index))
		if _, ok := hyImportIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for hyImport")
		}
		hyImportIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in hyExport
	hyExportIndexMap := make(map[string]struct{})

	for _, elem := range gs.HyExportList {
		index := string(HyExportKey(elem.Index))
		if _, ok := hyExportIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for hyExport")
		}
		hyExportIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
