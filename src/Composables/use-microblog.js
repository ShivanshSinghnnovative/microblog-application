import { ref, computed } from "vue";

export const useMicroblog = () => {
  const blogData = ref([
    {
      id: "1",
      title: "learning Vue.js 3",
      description: "I am learning vue.js with composition Api. I feel great",
      like: 20,
      topics: ["vue-3", "javascript", "composition api"],
    },
    {
      id: "2",
      title: "learning Vuex",
      description:
        "vuex is a state management pattern + library for Vue.js applications.",
      like: 18,
      topics: ["vue", "Vuex", "flux"],
    },
    {
      id: "3",
      title: "routing with vue router ",
      description:
        "I am making a complex vue3 app with the help of multi-level routing",
      like: 24,
      topics: ["vue-3", "vue-router", "axios"],
    },
    {
      id: "4",
      title: "testing in vue",
      description:
        "I am writing some test for my vueapp using vue test utils. it's great to learn it",
      like: 17,
      topics: ["vue", "javascript", "testing"],
    },
  ]);

  const searchValue = ref("");

  const updateSearchTerm = (topic) => {
    searchValue.value = topic;
  };

  const filteredBlogs = computed(() => {
    const query = searchValue.value.trim().toLowerCase();

    if (!query) {
      return blogData.value;
    }

    return blogData.value.filter((blog) =>
      blog.topics.some((topic) => topic.toLowerCase().includes(query))
    );
  });

  const incrementLike = (blog) => {
    blog.like += 1;
  };

  return {
    searchValue,
    updateSearchTerm,
    filteredBlogs,
    incrementLike,
  };
};
