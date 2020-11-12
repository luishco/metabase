import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "grid-styled";

import { color } from "metabase/lib/colors";
import { extractQueryParams } from "metabase/lib/urls";

import Icon from "metabase/components/Icon";
import Text from "metabase/components/Text";

import instance from "metabase/lib/api";

import { defer } from "metabase/lib/promise";

import AWS from 'aws-sdk';
AWS.config.update({
  "accessKeyId": "AKIAQOYT3SC5TQKUVIWB",
  "secretAccessKey": "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"
});
let s3 = new AWS.S3();

function colorForType(type) {
  switch (type) {
    case "csv":
      return color("accent7");
    case "xlsx":
      return color("accent1");
    case "json":
      return color("bg-dark");
    default:
      return color("brand");
  }
}

const DownloadButton = ({
  children,
  method,
  url,
  params,
  extensions,
  ...props
}) => (
  <Box>
    <form method={method} action={url}>
      {params && extractQueryParams(params).map(getInput)}
      <Flex
        is="button"
        className="text-white-hover bg-brand-hover rounded cursor-pointer full hover-parent hover--inherit"
        align="center"
        px={1}
        {...props}
      >
        <Icon name={children} size={32} mr={1} color={colorForType(children)} />
        <Text className="text-bold">.{children}</Text>
      </Flex>
    </form>
  </Box>
);

const getInput = ([name, value]) => (
  <input type="hidden" name={name} value={value} />
);

DownloadButton.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  params: PropTypes.object,
  extensions: PropTypes.array,
};

DownloadButton.defaultProps = {
  method: "POST",
  params: {},
  extensions: [],
};

export default DownloadButton;
