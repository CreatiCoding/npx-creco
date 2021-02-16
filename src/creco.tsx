import React from "react";
import { Color, Box, Text } from "ink";

export const Creco = () => {
  return (
    <Box margin={1} padding={2} flexDirection="column">
      <Box marginBottom={1} alignItems="center">
        <Color cyan>Hello, </Color>
        <Color cyanBright>I'm </Color>
        <Color bgGreen white>
          <Text bold> Creco </Text>
        </Color>
        <Text> 😎</Text>
      </Box>
      <Box marginBottom={1}>
        <Color yellow>Front-End Engineer</Color>
        <Color magenta> or </Color>
        <Color green>DevOps Engineer</Color>
      </Box>
      <Box flexDirection="column" marginBottom={1}>
        <Text>
          <Color bgWhiteBright black>
            {"  "}
            GitHub{" "}
          </Color>
          <Text underline> https://github.com/CreatiCoding</Text>
        </Text>
        <Text>
          <Color bgWhiteBright black>
            {"    "}
            Blog{" "}
          </Color>
          <Text underline> https://www.creco-home.site</Text>
        </Text>
        <Text>
          <Color bgWhiteBright black>
            {" "}
            Twitter{" "}
          </Color>
          <Text underline> https://twitter.com/CreatiCoding</Text>
        </Text>
        <Text>
          <Color bgWhiteBright black>
            {" "}
            LeetCode{" "}
          </Color>
          <Text underline> https://www.creco-home.site/DailyLeetCodeJS</Text>
        </Text>
      </Box>
      <Color gray>Out of box, pay it forward 👋</Color>
      <Text underline>https://www.buymeacoffee.com/creaticoding</Text>
    </Box>
  );
};
