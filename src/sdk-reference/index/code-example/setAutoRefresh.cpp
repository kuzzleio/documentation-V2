try {
  kuzzle->index->setAutoRefresh("nyc-open-data", true);

  std::cout << "autorefresh flag is set to true" << std::endl;
} catch (KuzzleException e) {
  std::cerr << e.getMessage() << std::endl;
}
