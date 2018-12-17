#include <iostream>

#include "websocket.hpp"
#include "kuzzle.hpp"

using kuzzleio::Kuzzle;

int main(int argc, char * argv[]) {
    // Instanciate a Kuzzle client
    // with a WebSocket connection.
    // Replace "kuzzle" with
    // your Kuzzle hostname like "localhost"
    Kuzzle *k = new Kuzzle(new kuzzleio::WebSocket("kuzzle"));

    try {
        // Connects to the server.
        k->connect();
        std::cout << "Connected!" << std::endl;
    }
    catch(KuzzleException &e) {
        std::cerr << e.getMessage() << std::endl;
        exit(1);
    }

    try {
        // Get server current date as UNIX timestamp.
        std::cout << "Server current timestamp: "
                  << k->server->now()
                  << std::endl;
    }
    catch(KuzzleException &e) {
        std::cerr << e.getMessage() << std::endl;
        exit(1);
    }

    // Disconnects the SDK.
    k->disconnect();

    return 0;
}
