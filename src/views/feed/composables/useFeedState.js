import { computed } from 'vue';
import { useStore } from "vuex";
import { actionTypes } from "@/store/modules/feed";

export const useFeedState = () => {
  const store = useStore();

  const getFeed = ({ apiUrl }) =>
    store.dispatch(actionTypes.getFeed, { apiUrl });

  const articlesCount = computed(() => store.state.feed.data?.articlesCount ?? 0);
  const articles = computed(() => store.state.feed.data?.articles);
  const error = computed(() => store.state.feed.error);
  const isLoading = computed(() => store.state.feed.isLoading);

  return {
    getFeed,
    articlesCount,
    articles,
    error,
    isLoading
  };
};
