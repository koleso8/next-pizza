import { cn } from '@/shared/lib/utils';
import { RequiredSymbol } from '../required-symbol';
import { Input } from '../../ui';
import { ErrorText } from '../error-text';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  //   const {} = useFormContext();
  return (
    <div className={cn('', className)}>
      {label && (
        <p className=" font-medium mb-2">
          {label}
          {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input name={name} className="h-12 text-md" {...props} />
      </div>
      <ErrorText text={'zapolni pole'} className="mt-2" />
    </div>
  );
};
