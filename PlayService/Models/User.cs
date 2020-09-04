﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string ConnectionId { get; set; }
        public User(string connectionId,int id, string name)
        {
            this.ConnectionId = connectionId;
            this.Id = id;
            this.UserName = name;
        }
    }
}
