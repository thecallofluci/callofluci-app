import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import packageJson from '../../package.json' 

export default async function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-8">
            <div className="mt-8">
                <Snippet
                    hideSymbol
                    hideCopyButton
                    variant="flat"
                >
                    <span>
                        <Link href="https://github.com/thecallofluci/callofluci-app">
                            {' '}
                            <Code color="primary">
                                v{packageJson.version}+
                                {process.env.REACT_APP_GIT_HASH}
                            </Code>
                        </Link>
                    </span>
                </Snippet>
            </div>
        </footer>
    );
}