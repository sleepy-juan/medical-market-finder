package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"khidi/x/khidi/types"
)

var _ = strconv.Itoa(0)

func CmdHyCompetition() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "hy-competition [name] [group]",
		Short: "Query hy-competition",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqName := args[0]
			reqGroup := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryHyCompetitionRequest{

				Name:  reqName,
				Group: reqGroup,
			}

			res, err := queryClient.HyCompetition(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
