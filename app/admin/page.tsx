"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { AdminLogin } from "@/components/admin-login"

export default function AdminPage() {
  const leads = useQuery(api.hospitalChatbotLeads.get) || []
  const isLoading = leads === undefined

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">상담 신청 내역</CardTitle>
                <CardDescription className="mt-2">접수된 상담 신청을 확인하고 관리할 수 있습니다</CardDescription>
              </div>
              <Button onClick={handleLogout} variant="outline" size="icon" title="로그아웃">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">데이터를 불러오는 중...</div>
            ) : leads.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">아직 접수된 상담 신청이 없습니다.</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>번호</TableHead>
                      <TableHead>상호</TableHead>
                      <TableHead>성명</TableHead>
                      <TableHead>전화번호</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>개인정보 동의</TableHead>
                      <TableHead>신청일시</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead, index) => (
                      <TableRow key={lead._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{lead.hospital_name}</TableCell>
                        <TableCell>{lead.contact_name}</TableCell>
                        <TableCell>{lead.phone}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>
                          {lead.privacy_consent ? (
                            <Badge variant="default" className="bg-green-600">
                              동의
                            </Badge>
                          ) : (
                            <Badge variant="destructive">미동의</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground">{formatDate(lead._creationTime)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            <div className="mt-6 text-sm text-muted-foreground">총 {leads.length}건의 상담 신청</div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
