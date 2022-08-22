package khidi

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"khidi/testutil/sample"
	khidisimulation "khidi/x/khidi/simulation"
	"khidi/x/khidi/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = khidisimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgHyAddMarketsize = "op_weight_msg_hy_add_marketsize"
	// TODO: Determine the simulation weight value
	defaultWeightMsgHyAddMarketsize int = 100

	opWeightMsgHyAddPartner = "op_weight_msg_hy_add_partner"
	// TODO: Determine the simulation weight value
	defaultWeightMsgHyAddPartner int = 100

	opWeightMsgHyAddImport = "op_weight_msg_hy_add_import"
	// TODO: Determine the simulation weight value
	defaultWeightMsgHyAddImport int = 100

	opWeightMsgHyAddExport = "op_weight_msg_hy_add_export"
	// TODO: Determine the simulation weight value
	defaultWeightMsgHyAddExport int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	khidiGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&khidiGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgHyAddMarketsize int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgHyAddMarketsize, &weightMsgHyAddMarketsize, nil,
		func(_ *rand.Rand) {
			weightMsgHyAddMarketsize = defaultWeightMsgHyAddMarketsize
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgHyAddMarketsize,
		khidisimulation.SimulateMsgHyAddMarketsize(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgHyAddPartner int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgHyAddPartner, &weightMsgHyAddPartner, nil,
		func(_ *rand.Rand) {
			weightMsgHyAddPartner = defaultWeightMsgHyAddPartner
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgHyAddPartner,
		khidisimulation.SimulateMsgHyAddPartner(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgHyAddImport int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgHyAddImport, &weightMsgHyAddImport, nil,
		func(_ *rand.Rand) {
			weightMsgHyAddImport = defaultWeightMsgHyAddImport
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgHyAddImport,
		khidisimulation.SimulateMsgHyAddImport(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgHyAddExport int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgHyAddExport, &weightMsgHyAddExport, nil,
		func(_ *rand.Rand) {
			weightMsgHyAddExport = defaultWeightMsgHyAddExport
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgHyAddExport,
		khidisimulation.SimulateMsgHyAddExport(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
