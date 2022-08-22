package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddExport(goCtx context.Context, msg *types.MsgHyAddExport) (*types.MsgHyAddExportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	export := types.HyExport {
		Index: msg.Name + "_" + msg.Year + "_" + msg.Group,
		Name: msg.Name,
		Year: msg.Year,
		Group: msg.Group,
		Volume: msg.Volume,
	}
	k.SetHyExport(ctx, export)

	return &types.MsgHyAddExportResponse{}, nil
}
