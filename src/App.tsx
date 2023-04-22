import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label>Name</Label>
                <Input id={'name'} name={'name'} />
                <Label>Email</Label>
                <Input id={'name'} name={'name'} />
                <Label>Message</Label>
                <Input id={'message'} name={'message'} />
            </form>
        </div>
    );
}

export default App;
