package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddMarketsize(goCtx context.Context, msg *types.MsgHyAddMarketsize) (*types.MsgHyAddMarketsizeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgHyAddMarketsizeResponse{}, nil
}
