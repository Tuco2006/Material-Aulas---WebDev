import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function ListaUsu() {

    const [users, setUsers] = useState([]);
    const APIURL = import.meta.env.VITE_API_URL;
    const [name, setName] = useState("");

    function handleClick() {
        alert("Salvo com sucesso!")
    }

    useEffect(() => {
        fetch(`${APIURL}/users`)
        .then((response) => response.json())
        .then((data) => setUsers(data))
    },
    [])

  return (
    <Table>
      <TableCaption>A list of our users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Avatar</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((pegaItem) => (
          <TableRow key={pegaItem.id}>
            <TableCell className="font-medium">{pegaItem.id}</TableCell>
            <TableCell>
                <img src={pegaItem.avatar} alt={pegaItem.name} className="w-10 h-10 rounded-full"/>
            </TableCell>
            <TableCell>{pegaItem.name}</TableCell>
            <TableCell>{pegaItem.email}</TableCell>
            <TableCell className="flex gap-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Editar</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">Name</Label>
                        <Input 
                        id="sheet-demo-name" 
                        defaultValue="Pedro Duarte"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                    </div>
                    <SheetFooter>
                    <Button onClick={handleClick} type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
