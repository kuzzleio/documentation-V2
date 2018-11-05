try {
  kuzzle->server->getAllStats();

  std::cout << "Success" << std::endl;
} catch (kuzzleio::KuzzleException e) {
  std::cerr << e.getMessage() << std::endl;
}
