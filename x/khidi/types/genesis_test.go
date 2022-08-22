package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"khidi/x/khidi/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				HyMarketsizeList: []types.HyMarketsize{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				HyPartnerList: []types.HyPartner{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				HyImportList: []types.HyImport{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				HyExportList: []types.HyExport{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated hyMarketsize",
			genState: &types.GenesisState{
				HyMarketsizeList: []types.HyMarketsize{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated hyPartner",
			genState: &types.GenesisState{
				HyPartnerList: []types.HyPartner{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated hyImport",
			genState: &types.GenesisState{
				HyImportList: []types.HyImport{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated hyExport",
			genState: &types.GenesisState{
				HyExportList: []types.HyExport{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
