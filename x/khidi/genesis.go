package khidi

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/keeper"
	"khidi/x/khidi/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the hyMarketsize
	for _, elem := range genState.HyMarketsizeList {
		k.SetHyMarketsize(ctx, elem)
	}
	// Set all the hyPartner
	for _, elem := range genState.HyPartnerList {
		k.SetHyPartner(ctx, elem)
	}
	// Set all the hyImport
	for _, elem := range genState.HyImportList {
		k.SetHyImport(ctx, elem)
	}
	// Set all the hyExport
	for _, elem := range genState.HyExportList {
		k.SetHyExport(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.HyMarketsizeList = k.GetAllHyMarketsize(ctx)
	genesis.HyPartnerList = k.GetAllHyPartner(ctx)
	genesis.HyImportList = k.GetAllHyImport(ctx)
	genesis.HyExportList = k.GetAllHyExport(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
