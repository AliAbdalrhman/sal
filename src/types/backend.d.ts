interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
}

interface LoginResponse {
  token: string;
}

interface User {
  avatar: string;
  bio: string;
  created_at: string;
  email: string;
  first_name: string;
  full_name: string;
  id: number;
  job: string;
  last_name: string;
  phone: string;
  username: string;
  questions_count: string;
  answers_count: string;
}

interface QuestionsResponse {
  data: Questions[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
  };
  search_term: string;
}

interface Question {
  answers_count: number;
  content: string;
  created_at: string;
  downvotes: number;
  id: number;
  upvotes: number;
  user: User;
  // accepted_answer: any;
  // viewer_vote: any;
}

interface SearchFormProps {
  showSearch: boolean;
  setShowSearch: any;
}
