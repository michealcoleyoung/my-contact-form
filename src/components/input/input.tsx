import styles from './input.module.scss';
import classNames from 'classnames';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-inputs-and-templates
 */
export const Input = ({ className, id, name }: InputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input id={id} name={name} />
        </div>
    );
};
