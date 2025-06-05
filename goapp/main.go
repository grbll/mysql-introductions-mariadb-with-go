package main

import (
	"database/sql"
	"fmt"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	var dsn string = "goapp:goapp@tcp(mysql:3306)/timestampdb"
	db, err := sql.Open("mysql", dsn)

	if err != nil {
		log.Fatalf("DB open error: %v", err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatalf("DB connect error: %v", err)
	}

	fmt.Println("Connection to timestampdb succesufll!")

	_, err = db.Exec(`INSERT INTO users (user_email) VALUES (?)`, "newuser@example.com")
	if err != nil {
		log.Fatalf("Insert failed: %v", err)
	}

	for {
		rows, err := db.Query("Select * FROM users")
		if err != nil {
			log.Fatalf("DB query error: %v", err)
		}
		defer rows.Close()
		for rows.Next() {
			var id int
			var email string
			if err := rows.Scan(&id, &email); err != nil {
				log.Printf("Row scan error: %v", err)
				continue
			}
			fmt.Printf("ID: %d, Email: %s\n", id, email)
		}
		time.Sleep(2 * time.Second)
	}
}
