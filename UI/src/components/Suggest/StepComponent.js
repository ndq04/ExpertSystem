import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

function StepComponent({initStep}) {
  const steps = [
    {id: 0, label: 'Nhập tên của bạn', complete: false},
    {id: 1, label: 'Giới tính của bạn ?', complete: false},
    {
      id: 2,
      label: 'Nghề nghiệp hiện tại của bạn ?',
      complete: false,
    },
    {
      id: 3,
      label: 'Sở thích của bạn là gì ?',
      complete: false,
    },
  ]

  return (
    <div className='step'>
      <Stepper orientation='vertical' activeStep={initStep}>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel>
              <span
                className={
                  step.id === initStep
                    ? 'step-label active'
                    : 'step-label'
                }
              >
                {step.label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default StepComponent
