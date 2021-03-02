package com.one.innovation.digital.crud.saladereuniao.saladereuniao.repository;

import com.one.innovation.digital.crud.saladereuniao.saladereuniao.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long>{ }
