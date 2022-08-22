package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"khidi/x/khidi/types"
)

func (k msgServer) HyAddImport(goCtx context.Context, msg *types.MsgHyAddImport) (*types.MsgHyAddImportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_import := types.HyImport{
		Index:  msg.Name + "_" + msg.Year + "_" + msg.Group,
		Name:   msg.Name,
		Year:   msg.Year,
		Group:  msg.Group,
		Volume: msg.Volume,
	}
	k.SetHyImport(ctx, _import)

	return &types.MsgHyAddImportResponse{}, nil
}
