import styles from './label.module.scss';
import classNames from 'classnames';
import { Label as Label0 } from './label';

export interface LabelProps {
    className?: string;
    children?: JSX.Element| Array<JSX.Element|string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-labels-and-templates
 */
export const Label = ({ className, children, htmlFor }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor}>{ children }</label>
        </div>
    );
};
