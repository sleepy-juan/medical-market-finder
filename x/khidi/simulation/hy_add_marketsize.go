package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"khidi/x/khidi/keeper"
	"khidi/x/khidi/types"
)

func SimulateMsgHyAddMarketsize(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgHyAddMarketsize{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the HyAddMarketsize simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "HyAddMarketsize simulation not implemented"), nil, nil
	}
}
