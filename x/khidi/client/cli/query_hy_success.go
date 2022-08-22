package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

var _ = strconv.Itoa(0)

func CmdHySuccess() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "hy-success [name] [group]",
		Short: "Query hy-success",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqName := args[0]
			reqGroup := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryHySuccessRequest{

				Name:  reqName,
				Group: reqGroup,
			}

			res, err := queryClient.HySuccess(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
