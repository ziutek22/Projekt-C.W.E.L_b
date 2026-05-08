import { Head } from '@inertiajs/react'

interface Vulnerability {
    id: number
    cve_id: string | null
    title: string
    severity: string
    status: string
}

interface Props {
    vulnerabilities: {
        data: Vulnerability[]
    }
}

export default function Index({ vulnerabilities }: Props) {
    return (
        <>
            <Head title="Vulnerabilities" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Vulnerabilities</h1>
                <table className="w-full border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">CVE ID</th>
                        <th className="p-2 text-left">Title</th>
                        <th className="p-2 text-left">Severity</th>
                        <th className="p-2 text-left">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vulnerabilities.data.map((v) => (
                        <tr key={v.id} className="border-t">
                            <td className="p-2">{v.cve_id ?? '—'}</td>
                            <td className="p-2">{v.title}</td>
                            <td className="p-2">{v.severity}</td>
                            <td className="p-2">{v.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
