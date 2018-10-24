kuzzleio::NotificationListener listener =
  [](const kuzzleio::notification_result *notification) {
    std::cout << notification->volatiles << std::endl;
    // "{ "username": "nina vkote" }"
    std::cout << "Currently " << notification->result->count << " users in the room" << std::endl;
  };

try {
  // Subscribe to notifications when document leaves the scope
  const char *filters = "{ \"exists\": \"name\" }";
  kuzzleio::room_options options = KUZZLE_ROOM_OPTIONS_DEFAULT;
  options.users = "all";

  kuzzle->realtime->subscribe("nyc-open-data", "yellow-taxi", filters, &listener, &options);

  // instantiate a second kuzzle client because
  // the same sdk instance does not receive his own notifications
  kuzzleio::options fuzzle_options = KUZZLE_OPTIONS_DEFAULT;
  kuzzleio::Kuzzle* fuzzle = new kuzzleio::Kuzzle("kuzzle", &fuzzle_options);
  fuzzle->connect();

  // Subscribe to the same room with the second client
  kuzzleio::room_options opfions = KUZZLE_ROOM_OPTIONS_DEFAULT;
  opfions.users = "all";
  opfions.volatiles = "{ \"username\": \"nina vkote\" }";

  fuzzle->realtime->subscribe("nyc-open-data", "yellow-taxi", filters, &listener, &opfions);
} catch (kuzzleio::KuzzleException &e) {
  std::cerr << e.getMessage() << std::endl;
}
