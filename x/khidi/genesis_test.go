package khidi_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "khidi/testutil/keeper"
	"khidi/testutil/nullify"
	"khidi/x/khidi"
	"khidi/x/khidi/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.KhidiKeeper(t)
	khidi.InitGenesis(ctx, *k, genesisState)
	got := khidi.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.HyMarketsizeList, got.HyMarketsizeList)
	require.ElementsMatch(t, genesisState.HyPartnerList, got.HyPartnerList)
	require.ElementsMatch(t, genesisState.HyImportList, got.HyImportList)
	require.ElementsMatch(t, genesisState.HyExportList, got.HyExportList)
	// this line is used by starport scaffolding # genesis/test/assert
}
