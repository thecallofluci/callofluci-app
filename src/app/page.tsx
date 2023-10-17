import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/src/config/site'
import { title, subtitle } from '@/src/components/primitives'
import { GithubIcon } from '@/src/components/icons'
import packageJson from '../../package.json'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>I am&nbsp;</h1>
                <h1 className={title({ color: 'luciprimitive' })}>
                    Call Of Luci&nbsp;
                </h1>
                <br />
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Create a new Observation.
                </h2>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    as={NextLink}
                    href={siteConfig.links.docs}
                    className={buttonStyles({
                        color: 'primary',
                        radius: 'full',
                    })}
                >
                    Documentation
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: 'bordered',
                        radius: 'full',
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>

            <div className="mt-8">
                <Snippet hideSymbol hideCopyButton variant="flat">
                    <span>
                        Get started by editing{' '}
                        <Code color="primary">app/page.tsx</Code>
                    </span>
                </Snippet>
            </div>

            <div className="mt-8">
                <Snippet hideSymbol hideCopyButton variant="flat">
                    <span>
                        Luci{' '}
                        <Code color="primary">
                            v{packageJson.version}+
                            {process.env.REACT_APP_GIT_HASH}
                        </Code>
                    </span>
                </Snippet>
            </div>
        </section>
    )
}
