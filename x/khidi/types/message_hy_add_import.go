package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgHyAddImport = "hy_add_import"

var _ sdk.Msg = &MsgHyAddImport{}

func NewMsgHyAddImport(creator string, name string, year string, group string, volume string) *MsgHyAddImport {
	return &MsgHyAddImport{
		Creator: creator,
		Name:    name,
		Year:    year,
		Group:   group,
		Volume:  volume,
	}
}

func (msg *MsgHyAddImport) Route() string {
	return RouterKey
}

func (msg *MsgHyAddImport) Type() string {
	return TypeMsgHyAddImport
}

func (msg *MsgHyAddImport) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgHyAddImport) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgHyAddImport) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
