package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddMarketsize(goCtx context.Context, msg *types.MsgHyAddMarketsize) (*types.MsgHyAddMarketsizeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	marketsize := types.HyMarketsize{
		Index:  msg.Name + "_" + msg.Year + "_" + msg.Group,
		Name:   msg.Name,
		Year:   msg.Year,
		Group:  msg.Group,
		Volume: msg.Volume,
	}
	k.SetHyMarketsize(ctx, marketsize)

	return &types.MsgHyAddMarketsizeResponse{}, nil
}
