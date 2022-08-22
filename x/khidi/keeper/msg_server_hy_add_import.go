package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddImport(goCtx context.Context, msg *types.MsgHyAddImport) (*types.MsgHyAddImportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgHyAddImportResponse{}, nil
}
