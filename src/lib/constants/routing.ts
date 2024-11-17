export const routes = {
  // Authentication routes
  signup: "/signup",
  verification_method: "/verification-method",
  verify_otp: "/verify-otp",
  signin: "/signin",
  forgot_password: "/forgot-password",
  reset_password: "/reset-password",
  onboarding: "/",

  // Home routes
  home: "/home",
  home_learn: "/home/learn",
  explore_fields: "/home/learn/fields",
  browse_skills: "/home/learn/fields/skills",
  skill_details: "/home/learn/skills", // Dynamic route [skillId]
  learn_course: "/home/learn/course",
  jobs: "/home/jobs",
  job_categories: "/home/jobs/categories", // Dynamic route [categoryId]
  professional_profile: "/home/jobs/professional-profile",
  job_details: "/home/jobs", // Dynamic route [jobId]
  // Hire routes
  hire: "/home/hire",
  hire_categories: "/home/hire/categories",
  hire_category: "/home/hire/category/", // Dynamic route [categoryId]
  professional_detail: "/home/hire/professional/", // Dynamic route [professionalId]
  post_job: "/home/hire/post-job",

  // My courses routes
  courses: "/courses/course/",
  course_categories: "/courses/categories/", // Dynamic route [categoryId]
  course_detail: "/courses/", // Dynamic route [courseId]

  // Settings routes
  settings: "/settings",
  settings_account: "/settings/account",
  settings_professional: "/settings/professional",
  create_profile: "/settings/professional/create",
  edit_profile: "/settings/professional/edit",
  settings_preferences: "/settings/preferences",
  settings_payments: "/settings/payments",

  // Chat routes
  chats: "/chats",
  chat_room: "/chats/room/", // Dynamic route [chatId]
  chat_project: "/chats/project/", // Dynamic route [projectId]

  // Posted jobs routes
  posted_jobs: "/jobs",
  posted_job_detail: "/jobs/", // Dynamic route [jobId]
  posted_jobs_category: "/jobs/category/", // Dynamic route [categoryId]
};
