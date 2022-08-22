package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddExport(goCtx context.Context, msg *types.MsgHyAddExport) (*types.MsgHyAddExportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgHyAddExportResponse{}, nil
}
