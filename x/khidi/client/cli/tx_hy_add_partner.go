package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

var _ = strconv.Itoa(0)

func CmdHyAddPartner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "hy-add-partner [buyer] [seller] [year] [proportion]",
		Short: "Broadcast message hy-add-partner",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBuyer := args[0]
			argSeller := args[1]
			argYear := args[2]
			argProportion := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgHyAddPartner(
				clientCtx.GetFromAddress().String(),
				argBuyer,
				argSeller,
				argYear,
				argProportion,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
