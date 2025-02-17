const Stepper = ({ steps, currentStep }: { steps: string[]; currentStep: number }) => {
  return (
    <ol className="flex items-center w-full mx-auto text-sm text-gray-500 font-medium sm:text-base">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex md:w-full items-center ${
            currentStep === index ? "text-blue-700" : "text-gray-600"
          } ${step !== steps[steps.length - 1] ? "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8" : ""}`}
          style={{ width: step !== steps[steps.length - 1] ? "100%" : "fit-content" }}
        >
          <div className="flex items-center text-sm whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2">
            <span
              className={`w-6 h-6 ${
                currentStep === index
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-600"
              } border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-8 lg:h-8`}
            >
              {index + 1}
            </span>
            {step}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;