/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reparame.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Admin
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tikets")
public class Tiket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Tiket;
    private Boolean estado;
    private String descripcion;
    private LocalDate fechaInicio;
    private LocalDate fechaRequerida;
    
    @ManyToOne
    @JoinColumn(name="id_servicio")
    private Servicio servicio;
    
    @OneToOne
    @JoinColumn(name="id_clasificacion")
    private Clasificacion clasificacion;
    
    @ManyToOne
    @JoinColumn(name="id_cliente")
    private Cliente cliente;
}
