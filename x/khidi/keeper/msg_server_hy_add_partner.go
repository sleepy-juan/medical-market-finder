package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddPartner(goCtx context.Context, msg *types.MsgHyAddPartner) (*types.MsgHyAddPartnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgHyAddPartnerResponse{}, nil
}
