import {
  queryOptions,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AlertService } from "./service";
import type {
  CreateAlertRequest,
  UpdateAlertRequest,
  CreateWebhookRequest,
  UpdateWebhookRequest,
} from "@/types/alerts";

export const alertsQueryOptions = () =>
  queryOptions({
    queryKey: ["alerts"],
    queryFn: () => AlertService.getAlerts(),
  });

export const alertQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["alerts", id],
    queryFn: () => AlertService.getAlert(id),
    enabled: !!id,
  });

export const alertTriggersQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["alerts", id, "triggers"],
    queryFn: () => AlertService.getAlertTriggers(id),
    enabled: !!id,
  });

export const webhooksQueryOptions = () =>
  queryOptions({
    queryKey: ["webhooks"],
    queryFn: () => AlertService.getWebhooks(),
  });

export const useAlertsQuery = () => {
  return useQuery(alertsQueryOptions());
};

export const useAlertQuery = (id: string) => {
  return useQuery(alertQueryOptions(id));
};

export const useAlertTriggersQuery = (id: string) => {
  return useQuery(alertTriggersQueryOptions(id));
};

export const useWebhooksQuery = () => {
  return useQuery(webhooksQueryOptions());
};

export const useCreateAlertMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAlertRequest) => AlertService.createAlert(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alerts"] });
    },
  });
};

export const useUpdateAlertMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateAlertRequest }) =>
      AlertService.updateAlert(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["alerts"] });
      queryClient.invalidateQueries({ queryKey: ["alerts", id] });
    },
  });
};

export const useDeleteAlertMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AlertService.deleteAlert(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alerts"] });
    },
  });
};

export const useEvaluateAlertsMutation = () => {
  return useMutation({
    mutationFn: () => AlertService.evaluateAlerts(),
  });
};

export const useCreateWebhookMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateWebhookRequest) =>
      AlertService.createWebhook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
};

export const useUpdateWebhookMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateWebhookRequest }) =>
      AlertService.updateWebhook(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
};

export const useDeleteWebhookMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AlertService.deleteWebhook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
};
