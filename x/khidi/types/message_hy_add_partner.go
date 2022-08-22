package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgHyAddPartner = "hy_add_partner"

var _ sdk.Msg = &MsgHyAddPartner{}

func NewMsgHyAddPartner(creator string, buyer string, seller string, year string, proportion string) *MsgHyAddPartner {
	return &MsgHyAddPartner{
		Creator:    creator,
		Buyer:      buyer,
		Seller:     seller,
		Year:       year,
		Proportion: proportion,
	}
}

func (msg *MsgHyAddPartner) Route() string {
	return RouterKey
}

func (msg *MsgHyAddPartner) Type() string {
	return TypeMsgHyAddPartner
}

func (msg *MsgHyAddPartner) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgHyAddPartner) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgHyAddPartner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
