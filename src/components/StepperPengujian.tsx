import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import stepsPengujian from "../const/stepsPengujian";
import useScreenWidth from "../utils/useGetScreenWidth";

type Props = {
  index: number;
};
export default function StepperPengujian({ index }: Props) {
  const { activeStep } = useSteps({
    index: index - 1,
    count: stepsPengujian.length,
  });
  const sw = useScreenWidth();

  return (
    <Stepper
      index={activeStep}
      maxW={"728px"}
      mx={"auto"}
      colorScheme="ap"
      orientation={sw < 480 ? "vertical" : "horizontal"}
      gap={[0, 4, 4]}
      height={["160px", "fit-content", "fit-content"]}
    >
      {stepsPengujian.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
