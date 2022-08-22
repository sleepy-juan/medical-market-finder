package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddPartner(goCtx context.Context, msg *types.MsgHyAddPartner) (*types.MsgHyAddPartnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	partner := types.HyPartner {
		Index: msg.Buyer + "_" + msg.Seller + "_" + msg.Year,
		Buyer: msg.Buyer,
		Seller: msg.Seller,
		Year: msg.Year,
		Proportion: msg.Proportion,
	}
	k.SetHyPartner(ctx, partner)

	return &types.MsgHyAddPartnerResponse{}, nil
}
