interface AuthenticationFlow {
  login(username: string, password: string): Promise<boolean>;
  logout(): void;
  isAuthenticated(): boolean;
}
