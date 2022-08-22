package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgHyAddExport = "hy_add_export"

var _ sdk.Msg = &MsgHyAddExport{}

func NewMsgHyAddExport(creator string, name string, year string, group string, volume string) *MsgHyAddExport {
	return &MsgHyAddExport{
		Creator: creator,
		Name:    name,
		Year:    year,
		Group:   group,
		Volume:  volume,
	}
}

func (msg *MsgHyAddExport) Route() string {
	return RouterKey
}

func (msg *MsgHyAddExport) Type() string {
	return TypeMsgHyAddExport
}

func (msg *MsgHyAddExport) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgHyAddExport) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgHyAddExport) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
